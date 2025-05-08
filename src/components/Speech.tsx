import { useState, useEffect, useCallback } from "react"

import { HiOutlineVolumeUp } from "react-icons/hi";

import '../style/components/speech.scss'

interface SpeechProps {
    word: string
}

function Speech({word}: SpeechProps) {

    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [synth, setSynth] = useState<SpeechSynthesis | null>(null);
  
    useEffect(() => {
      if (window.speechSynthesis) {
        setSynth(window.speechSynthesis);
      } else {
        console.error("Speech Synthesis não é suportado neste navegador.");
      }
  
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };
  
      loadVoices();  
  
      
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }, []);
  
    const handleSpeak = useCallback(() => {
      if (!synth) {
        console.error("Speech Synthesis não é suportado neste navegador.");
        return;
      }
      
      const utterance = new SpeechSynthesisUtterance(word);
      
      const voice = voices.find(v => v.name === 'Google UK English Male') || voices[0];
  
      if (voice) {
        utterance.voice = voice;
      }
  
      synth.cancel(); 
      synth.speak(utterance); 
    }, [synth, voices, word]);
  
    return (
      <div className="speech">
        <button 
        onClick={(e) => {
            e.stopPropagation()
            handleSpeak()
        }}
        aria-label='Ouvir'
        >
            <HiOutlineVolumeUp size={30} color="#403D39" />
        </button>
      </div>
    );
}

export default Speech