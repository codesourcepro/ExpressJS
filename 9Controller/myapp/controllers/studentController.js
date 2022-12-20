const allStudent = (req, res) => {
    res.send("All Student")
}

const deleteStudent = (req, res) => {
    console.log(req.params)
    const { id } = req.params
    console.log(id)
    if (id == 10) {
        res.send(`ID: ${id} is deleted`)
    } else {
        res.send(`Other Student detelte: ${id}`)
    }
}

module.exports = { allStudent, deleteStudent }