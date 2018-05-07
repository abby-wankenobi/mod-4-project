class CreateArtworks < ActiveRecord::Migration[5.1]
  def change
    create_table :artworks do |t|
      t.string :title
      t.string :artist
      t.string :image
      t.references :gallery, foreign_key: true

      t.timestamps
    end
  end
end
