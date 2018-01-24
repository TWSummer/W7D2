# == Schema Information
#
# Table name: steps
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string           not null
#  done        :boolean          not null
#  todo_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Step < ApplicationRecord
  validates :done, inclusion: { in: [true, false] }
  validates :description, :title, presence: true

  belongs_to :todo
end
