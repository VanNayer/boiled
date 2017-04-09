# frozen_string_literal: true
FactoryGirl.define do
  factory :epic do
    sequence(:name) { |n| "Une epic pas comme les autres #{n}" }
    user
  end
end
