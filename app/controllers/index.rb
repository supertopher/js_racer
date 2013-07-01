get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/victory_dino.html' do
  erb :dino
end

get '/victory_jeep.html' do
  erb :jeep
end