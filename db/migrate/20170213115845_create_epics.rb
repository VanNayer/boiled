# frozen_string_literal: true
class CreateEpics < ActiveRecord::Migration[5.0]
  def change
    create_table :epics do |t|
      t.string :name, limit: 60, null: :no
      t.timestamps
    end
    add_index :epics, :name, unique: true
  end
end
