# frozen_string_literal: true
class Epic < ApplicationRecord
  belongs_to :user
  validates :name, presence: true

  def vote_up(user)
    vote = Vote.new user_id: user.id, epic_id: id
    vote.save!
  end
end
