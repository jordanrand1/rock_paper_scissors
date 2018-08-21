var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var win_or_lose = document.getElementById('label')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')
var draws = document.getElementById('draws')
var wins_count = 0
var losses_count = 0
var draws_count = 0
var choices = ['rock', 'paper', 'scissors']
var bot_choice = ''
var user_choice = ''

rock.addEventListener('click', function() {
  user_choice = 'rock'
  bot_choice = choices[Math.floor(Math.random() * choices.length)]
  winner(user_choice, bot_choice)
})

paper.addEventListener('click', function() {
  user_choice = 'paper'
  bot_choice = choices[Math.floor(Math.random() * choices.length)]
  winner(user_choice, bot_choice)
})

scissors.addEventListener('click', function() {
  user_choice = 'scissors'
  bot_choice = choices[Math.floor(Math.random() * choices.length)]
  winner(user_choice, bot_choice)
})

function winner(user_choice, bot_choice){
  if (user_choice === bot_choice){
    win_or_lose.innerHTML = 'Bot: ' + bot_choice + '! Draw!'
    draws_count++
    draws.innerHTML = draws_count
  }
  switch (user_choice){
    case 'rock':
      if (bot_choice == 'scissors'){
        win_or_lose.innerHTML = 'Bot: ' + bot_choice + '! You win!!'
        wins_count++
        wins.innerHTML = wins_count
      } else {
        win_or_lose.innerHTML = 'Bot: ' + bot_choice + '! You lose!'
        losses_count++
        losses.innerHTML = losses_count
      }
      break
    case 'paper':
      if (bot_choice == 'rock'){
        win_or_lose.innerHTML = 'Bot: ' + bot_choice + '! You win!!'
        wins_count++
        wins.innerHTML = wins_count
      } else {
        win_or_lose.innerHTML = 'Bot: ' + bot_choice + '! You lose!'
        losses_count++
        losses.innerHTML = losses_count
      } 
      break
    case 'scissors':
      if (bot_choice == 'paper'){
        win_or_lose.innerHTML = 'Bot: ' + bot_choice + '! You win!!'
        wins_count++
        wins.innerHTML = wins_count
      } else {
        win_or_lose.innerHTML = 'Bot: ' + bot_choice + '! You lose!'
        losses_count++
        losses.innerHTML = losses_count
      } 
      break
  }
}