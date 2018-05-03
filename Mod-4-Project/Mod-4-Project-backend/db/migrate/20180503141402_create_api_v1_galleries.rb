class CreateApiV1Galleries < ActiveRecord::Migration[5.1]
  def change
    create_table :api_v1_galleries do |t|
      t.string :name
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
