import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState('');
  const [mediaType, setMediaType] = useState('photo');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [style, setStyle] = useState('realistic');
  const [duration, setDuration] = useState(10);
  const [avatar, setAvatar] = useState('none');
  const [voice, setVoice] = useState('en-US-male');
  const [cameraAngle, setCameraAngle] = useState('front');
  const [mediaUrl, setMediaUrl] = useState('');

  const handleGenerate = async () => {
    try {
      const endpoint = mediaType === 'photo' ? '/api/generate/photo' : '/api/generate/video';
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          prompt,
          aspectRatio,
          style,
          duration: mediaType === 'video' ? duration : undefined,
          avatar: mediaType === 'video' ? avatar : undefined,
          voice: mediaType === 'video' ? voice : undefined,
          cameraAngle: mediaType === 'video' ? cameraAngle : undefined,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMediaUrl(data.mediaUrl);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(t('errorGeneratingMedia'));
    }
  };

  const handleShare = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ mediaUrl, platform: 'x' }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(t('shareSuccess'));
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(t('errorSharing'));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{t('generateMedia')}</h2>
      <div className="max-w-md mx-auto">
        <select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="photo">{t('photo')}</option>
          <option value="video">{t('video')}</option>
        </select>
        <textarea
          placeholder={t('enterPrompt')}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <select
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="16:9">16:9</option>
          <option value="1:1">1:1</option>
          <option value="9:16">9:16</option>
        </select>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="realistic">{t('realistic')}</option>
          <option value="anime">{t('anime')}</option>
          <option value="cartoon">{t('cartoon')}</option>
        </select>
        {mediaType === 'video' && (
          <>
            <input
              type="number"
              placeholder={t('duration')}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              min="1"
            />
            <select
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="none">{t('noAvatar')}</option>
              <option value="male">{t('maleAvatar')}</option>
              <option value="female">{t('femaleAvatar')}</option>
            </select>
            <select
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="en-US-male">English (US, Male)</option>
              <option value="en-US-female">English (US, Female)</option>
              <option value="bn-IN-male">Bengali (India, Male)</option>
            </select>
            <select
              value={cameraAngle}
              onChange={(e) => setCameraAngle(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="front">{t('front')}</option>
              <option value="side">{t('side')}</option>
              <option value="top">{t('top')}</option>
            </select>
          </>
        )}
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-600 text-white p-2 rounded mb-4"
        >
          {t('generate')}
        </button>
        {mediaUrl && (
          <div className="mt-4">
            {mediaType === 'photo' ? (
              <img src={mediaUrl} alt="Generated" className="w-full rounded" />
            ) : (
              <video src={mediaUrl} controls className="w-full rounded" />
            )}
            <button
              onClick={handleShare}
              className="w-full bg-green-600 text-white p-2 rounded mt-2"
            >
              {t('shareToX')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
