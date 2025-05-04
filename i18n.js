import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: 'Login',
      signup: 'Signup',
      email: 'Email',
      password: 'Password',
      errorLoggingIn: 'Error logging in',
      errorSigningUp: 'Error signing up',
      signupSuccess: 'Signup successful! Please login.',
      generateMedia: 'Generate Media',
      photo: 'Photo',
      video: 'Video',
      enterPrompt: 'Enter prompt (e.g., "A futuristic city at sunset")',
      realistic: 'Realistic',
      anime: 'Anime',
      cartoon: 'Cartoon',
      duration: 'Duration (seconds)',
      noAvatar: 'No Avatar',
      maleAvatar: 'Male Avatar',
      femaleAvatar: 'Female Avatar',
      front: 'Front',
      side: 'Side',
      top: 'Top',
      generate: 'Generate',
      errorGeneratingMedia: 'Error generating media',
      shareToX: 'Share to X',
      shareSuccess: 'Shared successfully!',
      errorSharing: 'Error sharing media',
    },
  },
  bn: {
    translation: {
      login: 'লগইন',
      signup: 'সাইনআপ',
      email: 'ইমেল',
      password: 'পাসওয়ার্ড',
      errorLoggingIn: 'লগইন করতে ত্রুটি',
      errorSigningUp: 'সাইনআপ করতে ত্রুটি',
      signupSuccess: 'সাইনআপ সফল! দয়া করে লগইন করুন।',
      generateMedia: 'মিডিয়া তৈরি করুন',
      photo: 'ফটো',
      video: 'ভিডিও',
      enterPrompt: 'প্রম্পট লিখুন (যেমন, "সূর্যাস্তে একটি ফিউচারিস্টিক শহর")',
      realistic: 'বাস্তবসম্মত',
      anime: 'অ্যানিমে',
      cartoon: 'কার্টুন',
      duration: 'সময়কাল (সেকেন্ড)',
      noAvatar: 'কোনো অবতার নেই',
      maleAvatar: 'পুরুষ অবতার',
      femaleAvatar: 'মহিলা অবতার',
      front: 'সামনে',
      side: 'পাশ',
      top: 'উপর',
      generate: 'তৈরি করুন',
      errorGeneratingMedia: 'মিডিয়া তৈরি করতে ত্রুটি',
      shareToX: 'X এ শেয়ার করুন',
      shareSuccess: 'সফলভাবে শেয়ার করা হয়েছে!',
      errorSharing: 'মিডিয়া শেয়ার করতে ত্রুটি',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
