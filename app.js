

// Crear ruta de tarea
app.post('/create', async (req, res) => {
  try {
    const { title } = req.body;
    const nuevaTarea = new Task({ title });
    const tareaGuardada = await nuevaTarea.save();
    res.status(201).json(tareaGuardada);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear la tarea', details: err.message });
  }
});

// obtener todas las tareas
app.get('/', async (req, res) => {
  try {
    const tareas = await Task.find();
    res.json(tareas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

// obtener la id
app.get('/id/:_id', async (req, res) => {
  try {
    const tarea = await Task.findById(req.params._id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    res.status(400).json({ error: 'ID inválido' });
  }
});

// tarea finalizada
app.put('/markAsCompleted/:_id', async (req, res) => {
  try {
    const tarea = await Task.findByIdAndUpdate(
      req.params._id,
      { completed: true },
      { new: true }
    );
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(tarea);
  } catch (err) {
    res.status(400).json({ error: 'ID inválido' });
  }
});

// actualizar el titulo
app.put('/id/:_id', async (req, res) => {
  try {
    const { title } = req.body;
    const tarea = await Task.findById(req.params._id);

    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });

    // Solo actualiza el título
    tarea.title = title || tarea.title;
    const tareaActualizada = await tarea.save();

    res.json(tareaActualizada);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar el título' });
  }
});

// eliminar tarea
app.delete('/id/:_id', async (req, res) => {
  try {
    const tarea = await Task.findByIdAndDelete(req.params._id);
    if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json({ mensaje: 'Tarea eliminada con éxito' });
  } catch (err) {
    res.status(400).json({ error: 'ID inválido' });
  }
});

// Iniciar el servidor
const PORT =  8080;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
