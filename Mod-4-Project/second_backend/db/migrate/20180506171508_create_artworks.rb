class CreateArtworks < ActiveRecord::Migration[5.1]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :artist
      t.string :image
      t.integer :gallery_id

      t.timestamps
    end
  end
end
