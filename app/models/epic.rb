# frozen_string_literal: true
class Epic < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
end
