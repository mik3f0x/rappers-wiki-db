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
        const { id } = req.params;
        const rapper = await Rapper.findById(id);

        if (rapper) {
            return res.json(rapper);
        }

        res.status(404).json({ message: "Rapper not found!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}
  
export const getRapperByName = async (req, res) => {
    try {
        const { name } = req.params;
        const rapper = await Rapper.find({Name: name});

        if (rapper[0]) {
            return res.json(rapper[0]);
        }

        res.status(404).json({ message: "Rapper not found!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

export const getRappersByGenre = async (req, res) => {
  try {
      const { genre } = req.params;
      const rapper = await Rapper.find({Genres: { $elemMatch: {$eq: genre} }});

      if (rapper[0]) {
          return res.json(rapper);
      }

      res.status(404).json({ message: "No rapper with that genre!" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
  }
}

export const getRappersByLocation = async (req, res) => {
  try {
      const { location } = req.params;
      const rapper = await Rapper.find({ $or: [{Origin: { "$regex": location, "$options": "i" }}, {Place_of_Birth: { "$regex": location, "$options": "i" }}]});

      if (rapper[0]) {
          return res.json(rapper);
      }

      res.status(404).json({ message: "No rapper associated with that location!" });
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
      const { name } = req.params;
      const rapper = await Rapper.findOneAndUpdate({Name: name}, req.body);
  
      res.status(201).json(rapper);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteRapper = async (req, res) => {
    try {
      const { name } = req.params;
      const deleted = await Rapper.findOneAndDelete({Name: name});
  
      if (deleted) {
        return res.status(200).send("Rapper deleted!");
      }
  
      throw new Error("Rapper not found!");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };