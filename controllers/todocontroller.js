let data = [];

const defaultpage = (req, res) => {
    res.render('index', { data });
};

const addtodo = (req, res) => {
    data.push({
        id: Math.floor(Math.random() * 1000),
        todo: req.body.todo,
        category : req.body.category,
        time : new Date().toLocaleString()
    });
    res.redirect('/');
};

const edittodo = (req, res) => {
    const id = req.params.id;
    const editTodo = data.find(t => t.id == id);
    
    res.render("index", { data, editTodo });
};

const update = (req, res) => {
    const id = req.params.id;
    data = data.map(t => {
        if (t.id == id) {
            t.todo = req.body.todo;
            t.category = req.body.category;
        }
        return t;
    });

    res.redirect('/');
};

const deletetodo = (req,res)=>{
    const {id} = req.params;
    const newdata = data.filter((ele)=>{
        return ele.id != id;
    });
    data = newdata;
    res.redirect('/');
}

module.exports = { defaultpage, addtodo, edittodo, update ,deletetodo};