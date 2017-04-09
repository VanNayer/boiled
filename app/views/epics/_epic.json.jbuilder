# frozen_string_literal: true
json.extract! epic, :id, :name, :score
json.user epic.user.email
json.timeAgo epic.time_ago
