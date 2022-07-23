var companies = [
    {
        image:'Company logo.png',
        title:'spotfy',
        link:'spotfy.com'
    },
    {
        image:'Company logo (1).png',
        title:'slack',
        link:'slack.com'
    },
    {
        image:'Company logo (2).png',
        title:'dropbox',
        link:'dropbox.com'
    },
    {
        image:'Company logo (3).png',
        title:'zoom',
        link:'zoom.com'
    },
]

exports.getList = (req, res, next) => {
    res.send(companies)
}