class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    top = bounds["northEast"]["lat"]
    right = bounds["northEast"]["lng"]
    bottom = bounds["southWest"]["lat"]
    left = bounds["southWest"]["lng"]

    return Bench.where("(lat BETWEEN ? AND ?) AND (lng BETWEEN ? AND ?)", bottom, top, left, right)
  end
end
