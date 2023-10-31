import Rapper from "./Rapper.js";

export const getRappers = async (req, res) => {
    try {
      const rappers = await Rapper.find();
      res.json(rappers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getRapper = async (req, res) => {
    try {
        const { Name } = req.params;
        const rapper = await Rapper.find({Name});

    if (rapper) {
        return res.json(rapper);
    }

    res.stats(404).json({ message: "Rapper not found!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
        }
}

export const createRapper = async (req, res) => {
    try {
      const rapper = new Rapper(req.body);
      await rapper.save();
      res.status(201).json(rapper);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateRapper = async (req, res) => {
    try {
      const { Name } = req.params;
      const rapper = await Rapper.findOneAndUpdate({Name}, req.body);
  
      res.status(201).json(rapper);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteRapper = async (req, res) => {
    try {
      const { Name } = req.params;
      const deleted = await Rapper.findOneAndDelete({Name});
  
      if (deleted) {
        return res.status(200).send("Rapper deleted!");
      }
  
      throw new Error("Rapper not found!");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };