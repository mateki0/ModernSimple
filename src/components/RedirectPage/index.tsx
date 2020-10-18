import * as React from 'react';
import RedirectHeading from './styled/RedirectHeading';
import RedirectSpan from './styled/RedirectSpan';
import RedirectWrapper from './styled/RedirectWrapper';
import ThanksBox from './styled/ThanksBox';

const RedirectPage: React.FC = () => {
  return (
    <RedirectWrapper>
      <ThanksBox>
        <RedirectHeading>Dziękujemy!</RedirectHeading>
        <RedirectSpan>Odezwiemy się wkrótce.</RedirectSpan>
        <RedirectSpan as="a" href="/">
          Wróć na stronę główną
        </RedirectSpan>
      </ThanksBox>
    </RedirectWrapper>
  );
};

export default RedirectPage;
