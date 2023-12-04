const db = require("../db");

exports.getDoubtHistory = async (req, res) => {
  const userId = req.user.id;

  try {
    const { rows } = await db.query(
      "SELECT * FROM doubts WHERE user_id = $1 ORDER BY created_at DESC",
      [userId]
    );

    return res.status(200).json({
      success: true,
      doubts: rows,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
