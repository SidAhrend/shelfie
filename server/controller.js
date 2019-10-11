// const inventory = ['fuck you', 'fuck this', 'fuck everything']

module.exports = {
  getInventory(req, res) {
    const db = req.app.get("db");
    db.get_inventory().then(inventory => {
      res.status(200).send(inventory);
    });
  },
  postInventory(req, res) {
    const { name } = req.body;
    const db = req.app.get("db");
    db.post_inventory(name).then(inventory => {
      res.status(200).send(inventory);
    });
  }
};
