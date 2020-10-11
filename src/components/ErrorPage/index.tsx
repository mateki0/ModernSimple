import * as React from 'react';
import ErrorHeading from './styled/ErrorHeading';
import ErrorText from './styled/ErrorText';
import ErrorTextWrapper from './styled/ErrorTextWrapper';
import ErrorWrapper from './styled/ErrorWrapper';

const ErrorPage: React.FC = () => {
  return (
    <ErrorWrapper>
      <ErrorTextWrapper>
        <ErrorHeading>Przepraszamy!</ErrorHeading>
        <ErrorText>
          Strona chwilowo niedostepna, lub podana ścieżka jest niewłaściwa.
          <br />
          Zadzwoń do nas: <strong>605 999 089</strong>
        </ErrorText>
      </ErrorTextWrapper>
    </ErrorWrapper>
  );
};
export default ErrorPage;
