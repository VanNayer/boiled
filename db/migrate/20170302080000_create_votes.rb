# frozen_string_literal: true
class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes, &:timestamps
    add_belongs_to :votes, :epic
    add_belongs_to :votes, :user
  end
end
