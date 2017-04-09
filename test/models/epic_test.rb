# frozen_string_literal: true
require 'test_helper'

class EpicTest < ActiveSupport::TestCase
  def setup
    @michel = create :user, email: 'mimi@gmail.com'
    @jean = create :user, email: 'jano@gmail.com'
  end

  test 'create an epic' do
    # when
    epic = create :epic, user: @michel
    # then
    assert_equal @michel, epic.user
  end

  test 'vote for an epic' do
    # given
    epic = create :epic, user: @michel
    # when
    epic.vote_up @jean
    # then
    assert_equal 1, epic.votes.count
    assert_equal @jean, epic.votes.first.user
  end

  test 'all_with_score' do
    # given
    epics = create_list :epic, 2, user: @michel
    epics.each do |epic|
      epic.vote_up @jean
    end
    # when
    result = Epic.all_with_score
    # then
    assert_equal 1, result[0].score
    assert_equal 1, result[1].score
  end
end
