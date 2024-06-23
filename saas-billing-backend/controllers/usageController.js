app.get('/usage', ensureAuthenticated, (req, res) => {
    const userId = req.user.id;
    Usage.find({ userId }, (err, usage) => {
        if (err) {
            res.status(500).send('Error fetching usage details');
        } else {
            res.json(usage);
        }
    });
});