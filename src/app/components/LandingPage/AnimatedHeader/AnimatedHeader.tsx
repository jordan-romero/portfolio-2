import { useState, useEffect } from 'react';
import { HeaderContainer } from './animatedHeader.styled';
import { useTheme } from '@mui/material/styles';
import {
  StaticText,
  NameText,
  RoleText,
  DynamicTextContainer,
  DynamicText,
  BlinkingCursor,
} from './animatedHeader.styled';

export const AnimatedHeader = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isComplete, setIsComplete] = useState(false);

  const theme = useTheme();

  const staticText = 'Hello. My name is';
  const name = 'Jordan Romero';
  const roleText = 'I am a';
  const role = '<Full Stack Developer />';
  const dynamicPrefix = 'I believe in';
  const dynamicWords = [
    'adaptability',
    'innovation',
    'transparency',
    'analytical thinking',
  ];
  const finalWord = 'collaboration';

  useEffect(() => {
    const handleTyping = () => {
      if (isComplete) return;

      if (loopNum === dynamicWords.length) {
        const fullText = `${dynamicPrefix} ${finalWord}`;
        if (text === fullText) {
          setIsComplete(true);
          return;
        }
        setText(fullText.substring(0, text.length + 1));
      } else {
        const current = loopNum % dynamicWords.length;
        const fullText = `${dynamicPrefix} ${dynamicWords[current]}`;

        if (!isDeleting && text === fullText) {
          setIsDeleting(true);
          setTypingSpeed(100);
        } else if (isDeleting && text === dynamicPrefix + ' ') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
        }

        setText(
          isDeleting
            ? text.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, isComplete, dynamicWords]);

  const renderDynamicText = () => {
    const parts = text.split(' ');
    const prefix = parts.slice(0, 3).join(' ');
    const dynamicWord = parts.slice(3).join(' ');

    return (
      <>
        {prefix}{' '}
        <span
          style={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}
        >
          {dynamicWord}
        </span>
      </>
    );
  };

  return (
    <HeaderContainer>
      <StaticText variant='h2'>{staticText}</StaticText>
      <NameText variant='h1'>{name}</NameText>
      <RoleText variant='h3' color='text.primary'>
        {roleText} <span style={{ fontWeight: 'bold' }}>{role}</span>
      </RoleText>
      <DynamicTextContainer>
        <DynamicText variant='h4'>{renderDynamicText()}</DynamicText>
        <BlinkingCursor />
      </DynamicTextContainer>
    </HeaderContainer>
  );
};
