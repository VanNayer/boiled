# frozen_string_literal: true
class Epic < ApplicationRecord
  validates :name, presence: true
end
