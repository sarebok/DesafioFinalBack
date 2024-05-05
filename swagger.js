/**
 * @swagger
 * /:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Register a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               contact_info:
 *                 type: string
 *     responses:
 *       201:
 *         description: Client created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 client:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     contact_info:
 *                       type: string
 *       500:
 *         description: Server error
 * 
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Show all clients
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: An array of clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   contact_info:
 *                     type: string
 *       404:
 *         description: No clients found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Get event details by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The event ID
 *     responses:
 *       200:
 *         description: An event object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 event_id:
 *                   type: string
 *                 // Add other event properties here
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /:
 *   post:
 *     summary: Register a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               date:
 *                 type: string
 *               location:
 *                 type: string
 *               project_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 event:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     date:
 *                       type: string
 *                     location:
 *                       type: string
 *                     project_id:
 *                       type: string
 *       500:
 *         description: Server error
 * 
 *   get:
 *     summary: Show all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: An array of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   date:
 *                     type: string
 *                   location:
 *                     type: string
 *                   project_id:
 *                     type: string
 *       404:
 *         description: No events found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 role:
 *                   type: string
 *                 contact_info:
 *                   type: string
 *                 code:
 *                   type: integer
 *                 token:
 *                   type: string
 *       403:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 * 
 * /usuarios:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *               name:
 *                 type: string
 *               contact_info:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 *                     name:
 *                       type: string
 *                     contact_info:
 *                       type: string
 *       500:
 *         description: Server error
 * 
 *   get:
 *     summary: Show user details
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of user details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 *                   name:
 *                     type: string
 *                   contact_info:
 *                     type: string
 *       403:
 *         description: No token provided or failed to authenticate token
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Register a new project
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               client_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 project:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     client_id:
 *                       type: integer
 *       500:
 *         description: Server error
 * 
 *   get:
 *     summary: Show all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: An array of project details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   client_id:
 *                     type: integer
 *       404:
 *         description: No projects found
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /:
 *   post:
 *     summary: Register a new sponsor
 *     tags: [Sponsors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sponsor created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 sponsor:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *       500:
 *         description: Server error
 * 
 *   get:
 *     summary: Show all sponsors
 *     tags: [Sponsors]
 *     responses:
 *       200:
 *         description: An array of sponsor details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *       404:
 *         description: No sponsors found
 *       500:
 *         description: Server error
 */


