import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const CourseOutline = () => {
  const theme = useTheme();
  return (
    <>
      <Text style={theme.paragraph}>
        1. Basic functional programming: immutability, pure functions, map and
        reduce.
      </Text>
      <Text style={theme.paragraph}>
        2. Ecosystem overview. Existing tools and libraries.
      </Text>
      <Text style={theme.paragraph}>
        3. Domain modeling made functional with algebraic types.
      </Text>
      <Text style={theme.paragraph}>
        4. How to never use null nor undefined again.
      </Text>
      <Text style={theme.paragraph}>
        5. Basic fp-ts: interfaces, pipe, Eq, Ord, Option, Either, and more.
      </Text>
      <Text style={theme.paragraph}>
        6. Realiable validations for forms, routing, endpoints, everything.
      </Text>
      <Text style={theme.paragraph}>
        7. Async code with error handling and still readable code.
      </Text>
      <Text style={theme.paragraph}>
        8. Advanced TypeScript: currying, advanced types, useful tips.
      </Text>
      <Text style={theme.paragraph}>
        9. Advanced fp-ts structures and patterns like functional optics etc.
      </Text>
    </>
  );
};
