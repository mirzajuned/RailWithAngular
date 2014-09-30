json.array!(@users) do |user|
  json.extract! user, :id, :name, :first_name, :last_name, :email_id
  json.url user_url(user, format: :json)
end
