# frozen_string_literal: true
class EpicsController < ApplicationController
  before_action :set_epic, only: %i(vote_up destroy)
  before_action :authenticate_user!

  def index
    @epics = Epic.all_with_score
  end

  def create
    @epic = Epic.new(epic_params.merge(user_id: current_user.id))
    if @epic.save
      @epics = Epic.all_with_score
      render :index, status: :created, location: @epic
    else
      render json: @epic.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @epic.destroy
    respond_to do |format|
      format.html { redirect_to epics_url, notice: 'Epic was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def vote_up
    @epic.vote_up current_user
    @epics = Epic.all_with_score
    render :index, status: :created, location: @epic
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_epic
    @epic = Epic.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def epic_params
    params.fetch(:epic, {}).permit(:name)
  end
end
