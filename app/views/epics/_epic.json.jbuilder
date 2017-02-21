# frozen_string_literal: true
json.extract! epic, :id, :created_at, :updated_at, :name, :user_id
json.user epic.user.email
