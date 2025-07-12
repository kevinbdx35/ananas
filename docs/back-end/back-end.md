---
sidebar_position: 1
---

# Développement Back-end ⚙️

Le développement back-end constitue le **cœur invisible** de toute application web. C'est la partie qui gère la logique métier, les données, la sécurité et les communications entre le client et le serveur.

## 🎯 Qu'est-ce que le back-end ?

Le **back-end** (ou côté serveur) est responsable de tout ce qui se passe "derrière les rideaux" :

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   FRONT-END     │───►│    BACK-END     │───►│  BASE DE DONNÉES│
│                 │◄───│                 │◄───│                 │
│ • Interface     │    │ • Serveur       │    │ • MySQL         │
│ • Interactions  │    │ • API           │    │ • PostgreSQL    │
│ • Présentation  │    │ • Logique       │    │ • MongoDB       │
│ • Validation    │    │ • Sécurité      │    │ • Redis         │
│   client        │    │ • Authentification│  │ • ElasticSearch │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Responsabilités du back-end

- 🔐 **Authentification et autorisation** - Qui peut accéder à quoi ?
- 🗄️ **Gestion des données** - Stockage, récupération, mise à jour
- 🔒 **Sécurité** - Protection contre les attaques, validation des données
- 📊 **Logique métier** - Règles et processus spécifiques à l'application
- 🌐 **API et communication** - Interface entre front-end et données
- ⚡ **Performance** - Optimisation des requêtes et mise en cache
- 📈 **Monitoring** - Surveillance et logs des erreurs

## 🛠️ Technologies back-end populaires

### Langages de programmation

#### JavaScript (Node.js) 🟢
```javascript
// Serveur Express.js simple
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' }
    ];
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

#### Python 🐍
```python
# API avec Flask
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{
        'id': user.id,
        'name': user.name,
        'email': user.email
    } for user in users])

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(name=data['name'], email=data['email'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'Utilisateur créé'}), 201

if __name__ == '__main__':
    app.run(debug=True)
```

#### PHP 🐘
```php
<?php
// API REST avec PHP pur
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['PATH_INFO'] ?? '/';

// Connexion base de données
$pdo = new PDO('mysql:host=localhost;dbname=myapp', $username, $password);

switch ($method) {
    case 'GET':
        if ($path === '/users') {
            $stmt = $pdo->query('SELECT * FROM users');
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($users);
        }
        break;
        
    case 'POST':
        if ($path === '/users') {
            $data = json_decode(file_get_contents('php://input'), true);
            $stmt = $pdo->prepare('INSERT INTO users (name, email) VALUES (?, ?)');
            $stmt->execute([$data['name'], $data['email']]);
            echo json_encode(['message' => 'Utilisateur créé']);
        }
        break;
}
?>
```

### Frameworks populaires

| Langage | Framework | Popularité | Avantages |
|---------|-----------|------------|----------|
| JavaScript | **Express.js** | ⭐⭐⭐⭐⭐ | Simple, flexible, écosystème riche |
| JavaScript | **NestJS** | ⭐⭐⭐⭐ | TypeScript, architecture modulaire |
| Python | **Django** | ⭐⭐⭐⭐⭐ | Complet, admin interface, ORM |
| Python | **FastAPI** | ⭐⭐⭐⭐ | Très rapide, documentation auto |
| PHP | **Laravel** | ⭐⭐⭐⭐⭐ | Élégant, ORM Eloquent, ecosystem |
| PHP | **Symfony** | ⭐⭐⭐⭐ | Enterprise, composants réutilisables |
| Java | **Spring Boot** | ⭐⭐⭐⭐⭐ | Enterprise, robuste, écosystème |
| C# | **ASP.NET Core** | ⭐⭐⭐⭐ | Microsoft, performant, cross-platform |

## 🗄️ Bases de données

### SQL (Relationnelles)

#### MySQL/PostgreSQL
```sql
-- Création d'une table users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertion de données
INSERT INTO users (name, email, password_hash) VALUES 
('Alice Dupont', 'alice@example.com', '$2b$12$hash...'),
('Bob Martin', 'bob@example.com', '$2b$12$hash...');

-- Requêtes complexes
SELECT 
    u.name,
    u.email,
    COUNT(p.id) as total_posts,
    AVG(p.rating) as avg_rating
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY u.id
HAVING total_posts > 5
ORDER BY avg_rating DESC;
```

### NoSQL (Non-relationnelles)

#### MongoDB
```javascript
// Connexion et opérations MongoDB
const { MongoClient } = require('mongodb');

// Connexion
const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('myapp');
const users = db.collection('users');

// Insertion
const newUser = {
    name: 'Alice Dupont',
    email: 'alice@example.com',
    profile: {
        age: 25,
        city: 'Paris',
        interests: ['web', 'design', 'photography']
    },
    posts: [],
    createdAt: new Date()
};

const result = await users.insertOne(newUser);

// Recherche complexe
const activeUsers = await users.find({
    'profile.age': { $gte: 18, $lte: 65 },
    'profile.city': { $in: ['Paris', 'Lyon', 'Marseille'] },
    createdAt: { $gte: new Date('2024-01-01') }
}).sort({ createdAt: -1 }).limit(10).toArray();

// Agrégation
const stats = await users.aggregate([
    { $match: { 'profile.age': { $gte: 18 } } },
    { $group: {
        _id: '$profile.city',
        totalUsers: { $sum: 1 },
        avgAge: { $avg: '$profile.age' }
    }},
    { $sort: { totalUsers: -1 } }
]).toArray();
```

## 🔐 Authentification et sécurité

### JWT (JSON Web Tokens)

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express');
const app = express();

// Middleware de vérification JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Token manquant' });
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token invalide' });
        }
        req.user = user;
        next();
    });
}

// Route de connexion
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Trouver l'utilisateur
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: 'Identifiants invalides' });
    }
    
    // Vérifier le mot de passe
    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
        return res.status(401).json({ error: 'Identifiants invalides' });
    }
    
    // Générer le token
    const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    
    res.json({
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
});

// Route protégée
app.get('/api/profile', authenticateToken, async (req, res) => {
    const user = await User.findById(req.user.userId);
    res.json(user);
});
```

### Validation et sécurité

```javascript
const validator = require('validator');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss');

// Sécurité globale
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limite à 100 requêtes par IP
    message: 'Trop de requêtes, réessayez plus tard'
});
app.use('/api/', limiter);

// Validation des données
function validateUser(req, res, next) {
    const { name, email, password } = req.body;
    const errors = [];
    
    if (!name || name.length < 2) {
        errors.push('Le nom doit contenir au moins 2 caractères');
    }
    
    if (!validator.isEmail(email)) {
        errors.push('Email invalide');
    }
    
    if (!password || password.length < 8) {
        errors.push('Le mot de passe doit contenir au moins 8 caractères');
    }
    
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        errors.push('Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre');
    }
    
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    
    // Nettoyer les données contre XSS
    req.body.name = xss(req.body.name);
    req.body.email = validator.normalizeEmail(req.body.email);
    
    next();
}

app.post('/api/users', validateUser, async (req, res) => {
    // Traitement sécurisé
});
```

## 📡 APIs et communication

### REST API

```javascript
// API RESTful complète
const express = require('express');
const router = express.Router();

// GET /api/posts - Récupérer tous les posts
router.get('/posts', async (req, res) => {
    try {
        const { page = 1, limit = 10, category, author } = req.query;
        
        const filters = {};
        if (category) filters.category = category;
        if (author) filters.author = author;
        
        const posts = await Post.find(filters)
            .populate('author', 'name email')
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);
            
        const total = await Post.countDocuments(filters);
        
        res.json({
            posts,
            pagination: {
                current: page,
                pages: Math.ceil(total / limit),
                total
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/posts/:id - Récupérer un post spécifique
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'name email avatar')
            .populate('comments.author', 'name');
            
        if (!post) {
            return res.status(404).json({ error: 'Post non trouvé' });
        }
        
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/posts - Créer un nouveau post
router.post('/posts', authenticateToken, async (req, res) => {
    try {
        const { title, content, category, tags } = req.body;
        
        const post = new Post({
            title,
            content,
            category,
            tags,
            author: req.user.userId,
            slug: generateSlug(title),
            createdAt: new Date()
        });
        
        await post.save();
        await post.populate('author', 'name email');
        
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT /api/posts/:id - Mettre à jour un post
router.put('/posts/:id', authenticateToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post non trouvé' });
        }
        
        // Vérifier que l'utilisateur est l'auteur
        if (post.author.toString() !== req.user.userId) {
            return res.status(403).json({ error: 'Non autorisé' });
        }
        
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: new Date() },
            { new: true }
        ).populate('author', 'name email');
        
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE /api/posts/:id - Supprimer un post
router.delete('/posts/:id', authenticateToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post non trouvé' });
        }
        
        if (post.author.toString() !== req.user.userId) {
            return res.status(403).json({ error: 'Non autorisé' });
        }
        
        await Post.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
```

### GraphQL

```javascript
// Schéma GraphQL
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        posts: [Post!]!
        createdAt: String!
    }
    
    type Post {
        id: ID!
        title: String!
        content: String!
        author: User!
        comments: [Comment!]!
        likes: Int!
        createdAt: String!
    }
    
    type Comment {
        id: ID!
        content: String!
        author: User!
        post: Post!
        createdAt: String!
    }
    
    type Query {
        users: [User!]!
        user(id: ID!): User
        posts(limit: Int, offset: Int): [Post!]!
        post(id: ID!): Post
    }
    
    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
        createPost(title: String!, content: String!): Post!
        createComment(postId: ID!, content: String!): Comment!
        likePost(postId: ID!): Post!
    }
    
    type Subscription {
        postAdded: Post!
        commentAdded(postId: ID!): Comment!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        users: () => User.find().populate('posts'),
        user: (parent, { id }) => User.findById(id).populate('posts'),
        posts: (parent, { limit = 10, offset = 0 }) => 
            Post.find().populate('author').limit(limit).skip(offset),
        post: (parent, { id }) => 
            Post.findById(id).populate(['author', 'comments.author'])
    },
    
    Mutation: {
        createUser: async (parent, { name, email, password }) => {
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ name, email, password: hashedPassword });
            return await user.save();
        },
        
        createPost: async (parent, { title, content }, { user }) => {
            if (!user) throw new Error('Non authentifié');
            
            const post = new Post({
                title,
                content,
                author: user.id
            });
            
            await post.save();
            await post.populate('author');
            
            // Notification en temps réel
            pubsub.publish('POST_ADDED', { postAdded: post });
            
            return post;
        }
    },
    
    Subscription: {
        postAdded: {
            subscribe: () => pubsub.asyncIterator(['POST_ADDED'])
        }
    }
};
```

## 🏗️ Architecture et patterns

### Architecture en couches

```javascript
// Structure du projet
/*
src/
├── controllers/     # Logique de contrôle
├── services/       # Logique métier
├── repositories/   # Accès aux données
├── models/         # Modèles de données
├── middlewares/    # Middlewares Express
├── routes/         # Définition des routes
├── utils/          # Utilitaires
├── config/         # Configuration
└── tests/          # Tests
*/

// Controller
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    
    async getUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async createUser(req, res) {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

// Service (Logique métier)
class UserService {
    constructor(userRepository, emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    
    async createUser(userData) {
        // Validation
        await this.validateUserData(userData);
        
        // Vérifier que l'email n'existe pas
        const existingUser = await this.userRepository.findByEmail(userData.email);
        if (existingUser) {
            throw new Error('Email déjà utilisé');
        }
        
        // Hash du mot de passe
        userData.password = await bcrypt.hash(userData.password, 12);
        
        // Créer l'utilisateur
        const user = await this.userRepository.create(userData);
        
        // Envoyer email de bienvenue
        await this.emailService.sendWelcomeEmail(user.email, user.name);
        
        return user;
    }
    
    async validateUserData(userData) {
        const schema = Joi.object({
            name: Joi.string().min(2).max(50).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        });
        
        const { error } = schema.validate(userData);
        if (error) {
            throw new Error(error.details[0].message);
        }
    }
}

// Repository (Accès données)
class UserRepository {
    async findAll() {
        return await User.find().select('-password');
    }
    
    async findById(id) {
        return await User.findById(id).select('-password');
    }
    
    async findByEmail(email) {
        return await User.findOne({ email });
    }
    
    async create(userData) {
        const user = new User(userData);
        await user.save();
        return user.toObject({ versionKey: false, transform: (doc, ret) => {
            delete ret.password;
            return ret;
        }});
    }
    
    async update(id, updateData) {
        return await User.findByIdAndUpdate(id, updateData, { new: true }).select('-password');
    }
    
    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}
```

### Microservices

```javascript
// Service utilisateur (port 3001)
const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({ service: 'user-service', status: 'healthy' });
});

app.get('/users/:id', async (req, res) => {
    const user = await getUserById(req.params.id);
    res.json(user);
});

app.listen(3001);

// Service de commandes (port 3002)
const express = require('express');
const axios = require('axios');
const app = express();

app.post('/orders', async (req, res) => {
    try {
        // Vérifier que l'utilisateur existe
        const userResponse = await axios.get(`http://user-service:3001/users/${req.body.userId}`);
        const user = userResponse.data;
        
        // Vérifier le stock des produits
        const productResponse = await axios.post('http://inventory-service:3003/check-stock', {
            products: req.body.products
        });
        
        if (!productResponse.data.available) {
            return res.status(400).json({ error: 'Stock insuffisant' });
        }
        
        // Créer la commande
        const order = await createOrder(req.body);
        
        // Envoyer notification
        await axios.post('http://notification-service:3004/send', {
            type: 'order_created',
            userId: user.id,
            orderId: order.id
        });
        
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3002);

// API Gateway
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const app = express();

// Rate limiting global
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000
});
app.use(limiter);

// Authentification middleware
app.use(authenticateToken);

// Proxies vers les microservices
app.use('/api/users', createProxyMiddleware({
    target: 'http://user-service:3001',
    changeOrigin: true,
    pathRewrite: { '^/api/users': '/users' }
}));

app.use('/api/orders', createProxyMiddleware({
    target: 'http://order-service:3002',
    changeOrigin: true,
    pathRewrite: { '^/api/orders': '/orders' }
}));

app.listen(3000);
```

## 🚀 Déploiement et DevOps

### Docker

```dockerfile
# Dockerfile pour application Node.js
FROM node:18-alpine

# Créer le répertoire de l'app
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production && npm cache clean --force

# Créer un utilisateur non-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodeuser -u 1001

# Copier le code source
COPY --chown=nodeuser:nodejs . .

# Changer vers l'utilisateur non-root
USER nodeuser

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["node", "server.js"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mongodb://mongo:27017/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - mongo
      - redis
    volumes:
      - ./logs:/usr/src/app/logs
    restart: unless-stopped

  mongo:
    image: mongo:5
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    command: redis-server --appendonly yes

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app

volumes:
  mongo_data:
  redis_data:
```

### CI/CD avec GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      mongo:
        image: mongo:5
        ports:
          - 27017:27017
      
      redis:
        image: redis:7
        ports:
          - 6379:6379
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linting
        run: npm run lint
      
      - name: Run tests
        run: npm test
        env:
          NODE_ENV: test
          DATABASE_URL: mongodb://localhost:27017/test
          REDIS_URL: redis://localhost:6379
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to server
        uses: appleboy/ssh-action@v0.1.5
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/myapp
            git pull origin main
            npm ci --production
            npm run build
            pm2 restart myapp
```

## 📊 Monitoring et observabilité

### Logging

```javascript
const winston = require('winston');

// Configuration du logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});

// Middleware de logging des requêtes
app.use((req, res, next) => {
    const start = Date.now();
    
    res.on('finish', () => {
        const duration = Date.now() - start;
        logger.info('HTTP Request', {
            method: req.method,
            url: req.url,
            statusCode: res.statusCode,
            duration: `${duration}ms`,
            userAgent: req.get('User-Agent'),
            ip: req.ip
        });
    });
    
    next();
});

// Gestion globale des erreurs
app.use((error, req, res, next) => {
    logger.error('Unhandled Error', {
        error: error.message,
        stack: error.stack,
        url: req.url,
        method: req.method,
        body: req.body,
        user: req.user?.id
    });
    
    res.status(500).json({
        error: process.env.NODE_ENV === 'production' 
            ? 'Erreur interne du serveur' 
            : error.message
    });
});
```

### Métriques avec Prometheus

```javascript
const prometheus = require('prom-client');

// Métriques par défaut
prometheus.collectDefaultMetrics();

// Métriques personnalisées
const httpRequestDuration = new prometheus.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.5, 1, 2, 5]
});

const httpRequestsTotal = new prometheus.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code']
});

const activeConnections = new prometheus.Gauge({
    name: 'active_connections',
    help: 'Number of active connections'
});

// Middleware pour collecter les métriques
app.use((req, res, next) => {
    const start = Date.now();
    
    res.on('finish', () => {
        const duration = (Date.now() - start) / 1000;
        const route = req.route?.path || req.path;
        
        httpRequestDuration
            .labels(req.method, route, res.statusCode)
            .observe(duration);
            
        httpRequestsTotal
            .labels(req.method, route, res.statusCode)
            .inc();
    });
    
    next();
});

// Endpoint pour exposer les métriques
app.get('/metrics', (req, res) => {
    res.set('Content-Type', prometheus.register.contentType);
    res.end(prometheus.register.metrics());
});
```

## 🎯 Exercices pratiques

### Exercice 1 : API de blog
Crée une API REST complète pour un blog avec :
- Authentification JWT
- CRUD pour articles et commentaires
- Système de likes
- Upload d'images
- Pagination et filtres

### Exercice 2 : Chat en temps réel
Développe une application de chat avec :
- WebSockets avec Socket.io
- Salles de discussion
- Messages privés
- Historique des messages
- Notifications push

### Exercice 3 : E-commerce backend
Construit le backend d'une boutique en ligne :
- Gestion des produits et catégories
- Panier et commandes
- Système de paiement (Stripe)
- Gestion des stocks
- Rapports et analytics

---

:::success Félicitations ! 🎉
Tu as maintenant une compréhension solide du développement back-end ! Le back-end est le **cœur** de toute application. Continue à pratiquer en créant des projets concrets et n'hésite pas à explorer les différentes technologies selon tes besoins.
:::

## 🚀 Pour aller plus loin

### Concepts avancés à explorer
- **Event-driven architecture** - Architecture événementielle
- **CQRS et Event Sourcing** - Séparation lecture/écriture
- **Message queues** - Redis, RabbitMQ, Apache Kafka
- **Caching** - Stratégies de mise en cache
- **Database optimization** - Index, requêtes optimisées
- **Serverless** - AWS Lambda, Vercel Functions
- **GraphQL Federation** - Microservices GraphQL

### Ressources recommandées
- 📖 [Node.js Documentation](https://nodejs.org/docs/)
- 🎓 [MongoDB University](https://university.mongodb.com/)
- 📚 "Clean Architecture" by Robert Martin
- 🔗 [API Design Guidelines](https://github.com/microsoft/api-guidelines)
- 🎥 [Docker & Kubernetes Tutorials](https://kubernetes.io/docs/tutorials/)

