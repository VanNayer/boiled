# frozen_string_literal: true
class EpicsController < ApplicationController
  before_action :set_epic, only: %i(show edit update destroy)
  protect_from_forgery with: :null_session
  before_action :authenticate_user!

  # GET /epics
  # GET /epics.json
  def index
    @epics = Epic.all
  end

  # POST /epics
  # POST /epics.json
  def create
    @epic = Epic.new(epic_params)

    respond_to do |format|
      if @epic.save
        @epics = Epic.all
        format.html { redirect_to @epic, notice: 'Epic was successfully created.' }
        format.json { render :index, status: :created, location: @epic }
      else
        format.html { render :new }
        format.json { render json: @epic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /epics/1
  # PATCH/PUT /epics/1.json
  def update
    respond_to do |format|
      if @epic.update(epic_params)
        format.html { redirect_to @epic, notice: 'Epic was successfully updated.' }
        format.json { render :show, status: :ok, location: @epic }
      else
        format.html { render :edit }
        format.json { render json: @epic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /epics/1
  # DELETE /epics/1.json
  def destroy
    @epic.destroy
    respond_to do |format|
      format.html { redirect_to epics_url, notice: 'Epic was successfully destroyed.' }
      format.json { head :no_content }
    end
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
