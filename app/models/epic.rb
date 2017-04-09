# frozen_string_literal: true
class Epic < ApplicationRecord
  include ActionView::Helpers::DateHelper

  belongs_to :user
  has_many :votes
  validates :name, presence: true

  GRAVITY = 0.5

  def time_ago
    distance_of_time_in_words_to_now created_at
  end

  def score
    @score ||= calculate_score
  end

  def update_score(score)
    @score = score
  end

  def calculate_score
    hours_ago = (Time.current - created_at) / 60 / 60
    hackernews_score = votes.size / ((hours_ago + 2)**GRAVITY)
    (hackernews_score * 100).to_i
  end

  def vote_up(user)
    vote = Vote.new user_id: user.id, epic_id: id
    vote.save!
  end

  def self.all_with_score
    all.includes(:votes, :user).map do |epic|
      epic.update_score epic.calculate_score
      epic
    end
  end
end
