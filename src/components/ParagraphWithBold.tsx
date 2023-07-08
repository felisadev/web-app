import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface IParagraphWithBold extends TypographyProps {
  text: string;
  textToBold?: string;
  boldColor?: string;
  component?: React.ElementType;
}

const ParagraphWithBold: React.FC<IParagraphWithBold> = ({
  text,
  textToBold,
  boldColor = 'inherit',
  component = 'p',
  ...typographyProps
}) => {
  if (textToBold) {
    const textToBoldRegex = new RegExp(`\\b(${textToBold})\\b`, 'gi');
    const boldedText = text.replace(
      textToBoldRegex,
      `<strong style="color: ${boldColor}">${textToBold}</strong>`
    );
    return (
      <Typography
        component={component}
        dangerouslySetInnerHTML={{ __html: boldedText }}
        {...typographyProps}
      />
    );
  }
  return (
    <Typography component={component} {...typographyProps}>
      {text}
    </Typography>
  );
};

export default ParagraphWithBold;
