import { BowlingGame } from "./bowling";


describe('A bowling game', () => {
    
  let game:BowlingGame
  beforeEach(() => {
    game = new BowlingGame()
  });

  it('can roll a ball', () => {
    game.roll(0)
  })

  it('can play a gutter game', () =>{
    rollMany(game, 20, 0);
    expect(game.score()).toBe(0)
  })

  it('can roll a game with all ones', () =>{
    rollMany(game, 20, 1);
    expect(game.score()).toBe(20)
  })

  it('can roll a spare', () =>{
    rollSpare(game);
    game.roll(1)
    rollMany(game, 17, 0)
    expect(game.score()).toBe(12)
  })

  it('can roll a strike', () =>{
    game.roll(10)
    game.roll(1)
    game.roll(1)
    rollMany(game, 16, 0)
    expect(game.score()).toBe(14)
  })

  it('can roll perfect game', () => {
    rollMany(game, 12, 10)
    expect(game.score()).toBe(300)
  });
});

function rollSpare(game: BowlingGame) {
  game.roll(5);
  game.roll(5);
}

function rollMany(game: BowlingGame, rolls:number, pins:number) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}

