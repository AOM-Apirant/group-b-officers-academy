# Officers Academy - Contact Form, Trainee Registration, Expert Registration & Login System with MongoDB

ఈ project లో contact form submissions, trainee registrations, expert registrations మరియు login system ని MongoDB database లో save చేయడానికి setup చేయబడింది.

## Setup Instructions

### 1. Environment Variables

`.env.local` file create చేసి క్రింది variables add చేయండి:

```env
# Local MongoDB కోసం:
MONGODB_URI=mongodb://localhost:27017/officers-academy

# Production కోసం MongoDB Atlas URI ఉపయోగించండి:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/officers-academy
```

### 2. MongoDB Installation

#### Option A: Local MongoDB

1. MongoDB Community Server install చేయండి: https://www.mongodb.com/try/download/community
2. MongoDB service start చేయండి
3. Default port 27017 లో run అవుతుంది

#### Option B: MongoDB Atlas (Cloud)

1. MongoDB Atlas account create చేయండి: https://www.mongodb.com/atlas
2. Free cluster create చేయండి
3. Database user create చేయండి
4. Connection string copy చేసి `.env.local` లో add చేయండి

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

## Features

### Contact Form

- User details (name, email, phone, message) collect చేస్తుంది
- Form validation (required fields, email format)
- Real-time form submission to MongoDB
- Success/error messages display చేస్తుంది
- Form reset after successful submission

### Trainee Registration Form

- Complete trainee details collect చేస్తుంది (name, designation, department, etc.)
- Form validation (required fields, email format, phone format)
- Duplicate email check
- Real-time form submission to MongoDB
- Success/error messages display చేస్తుంది
- Form reset after successful submission

### Login System

- Email or phone number based authentication
- Password verification
- User type identification (trainee/expert)
- Status check (pending/approved/rejected)
- Real-time authentication with MongoDB
- Success/error messages display చేస్తుంది

### Database Schema

#### Contact Messages Collection:

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: Date,
  status: String // 'new', 'read', 'replied'
}
```

#### Trainees Collection:

```javascript
{
  _id: ObjectId,
  name: String,
  designation: String,
  workingPost: String,
  department: String,
  preparingFor: String,
  division: String,
  zone: String,
  phone: String,
  address: String,
  email: String,
  password: String,
  registrationDate: Date,
  status: String, // 'pending', 'approved', 'rejected'
  lastUpdated: Date
}
```

#### Experts Collection:

```javascript
{
  _id: ObjectId,
  name: String,
  designation: String,
  workingPost: String,
  department: String,
  preparingFor: String,
  division: String,
  zone: String,
  phone: String,
  address: String,
  email: String,
  password: String,
  registrationDate: Date,
  status: String, // 'pending', 'approved', 'rejected'
  lastUpdated: Date
}
```

### API Endpoints

#### Contact Form:

- `POST /api/contact` - New message submit చేయడానికి
- `GET /api/contact` - Messages retrieve చేయడానికి (admin purposes)

#### Trainee Registration:

- `POST /api/trainee-register` - New trainee registration submit చేయడానికి
- `GET /api/trainee-register` - Trainee registrations retrieve చేయడానికి (admin purposes)

#### Expert Registration:

- `POST /api/experts-register` - New expert registration submit చేయడానికి
- `GET /api/experts-register` - Expert registrations retrieve చేయడానికి (admin purposes)

#### Login System:

- `POST /api/login` - User authentication (email/phone + password)

## File Structure

```
├── lib/
│   └── mongodb.ts                    # MongoDB connection setup
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts              # Contact API endpoints
│   │   ├── trainee-register/
│   │   │   └── route.ts              # Trainee Registration API endpoints
│   │   ├── experts-register/
│   │   │   └── route.ts               # Expert Registration API endpoints
│   │   └── login/
│   │       └── route.ts               # Login Authentication API endpoints
│   ├── contact/
│   │   └── page.tsx                  # Contact form page
│   ├── login/
│   │   └── page.tsx                  # Login page
│   └── register/
│       ├── trainee-register/
│       │   └── page.tsx              # Trainee registration form page
│       └── experts-register/
│           └── page.tsx              # Expert registration form page
└── package.json                      # Dependencies
```

## Testing

### Contact Form Testing:

1. Development server start చేయండి
2. http://localhost:3000/contact పేజీకి వెళ్లండి
3. Contact form fill చేసి submit చేయండి
4. Console లో success message చూడండి
5. MongoDB database లో message save అయిందో check చేయండి

### Trainee Registration Testing:

1. Development server start చేయండి
2. http://localhost:3000/register/trainee-register పేజీకి వెళ్లండి
3. Registration form fill చేసి submit చేయండి
4. Console లో success message చూడండి
5. MongoDB database లో trainee data save అయిందో check చేయండి
6. Same email తో మరో registration try చేసి duplicate check test చేయండి

### Login System Testing:

1. Development server start చేయండి
2. First register a user (trainee or expert) with password
3. http://localhost:3000/login పేజీకి వెళ్లండి
4. Registered email/phone మరియు password enter చేయండి
5. Login successful message చూడండి
6. Wrong credentials తో test చేసి error message verify చేయండి
7. Unregistered user తో test చేసి error message verify చేయండి

## Production Deployment

1. MongoDB Atlas cluster setup చేయండి
2. Environment variables production server లో configure చేయండి
3. Database connection string update చేయండి
4. Application deploy చేయండి
