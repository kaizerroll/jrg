const router = require('express').Router()
const chalk = require('chalk')

router.get('/ping', (req, res, next) => {
  console.log(chalk.blue('PING!'))
  res.json({ reply: 'PONG!' })
})

module.exports = router