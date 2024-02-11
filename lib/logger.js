function logger(req, res, next) {
    console.log("== Got a new request")
    console.log("  -- URL:", req.url)
    console.log("  -- Method:", req.method)
    next()
}

module.exports = logger
