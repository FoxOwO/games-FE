export class Game {
  id;
  category_id;
  difficulty_id;
  game_name;
  editor;
  author;
  year_edition;
  age;
  min_players;
  max_players;
  play_duration;
  price;
  image;

  constructor(id, category_id, difficulty_id, game_name, editor, author, year_edition, age, min_players, max_players, play_duration, price, image) {
    this.id = id;
    this.category_id = category_id;
    this.difficulty_id = difficulty_id;
    this.game_name = game_name;
    this.editor = editor;
    this.author = author;
    this.year_edition = year_edition;
    this.age = age;
    this.min_players = min_players;
    this.max_players = max_players;
    this.play_duration = play_duration;
    this.price = price;
    this.image = image;
  }
}
