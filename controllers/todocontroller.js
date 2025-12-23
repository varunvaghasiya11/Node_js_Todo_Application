const Todomodel = require('../model/todomodel');
const data =[];

const defaultpage = async(req, res) => {
    const data = await Todomodel.find(); 
    res.render('index', { data });
};

const addtodo = async(req, res) => {
    const todoobj = {
        todo: req.body.todo,
        category : req.body.category,
        time : new Date().toLocaleString(),
    };

    const todocopy = await new Todomodel(todoobj);
    todocopy.save();
    res.redirect('/');
};

const edittodo = async(req, res) => {
    const id = req.params.id;
    const editTodo = await Todomodel.findOne({_id:id})
    
    res.render("index", { editTodo });
};

const update =async (req, res) => {
    const id = req.params.id;
    let obj = {
        todo : req.body.todo,
        category : req.body.category
    }
    await Todomodel.findByIdAndUpdate(id,obj)
    res.redirect('/');
};

const deletetodo = async(req,res)=>{
    const {id} = req.params;
    let deletetodo = await Todomodel.findByIdAndDelete(id);
    res.redirect('/');
}

module.exports = { defaultpage, addtodo, edittodo, update ,deletetodo};