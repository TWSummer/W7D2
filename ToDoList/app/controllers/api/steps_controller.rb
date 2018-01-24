class Api::StepsController < ApplicationController

  def index
    render json: Step.where(todo_id: params['todo_id'])
  end

end
