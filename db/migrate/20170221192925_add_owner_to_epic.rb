# frozen_string_literal: true
class AddOwnerToEpic < ActiveRecord::Migration[5.0]
  def change
    add_belongs_to :epics, :user, null: false
  end
end
