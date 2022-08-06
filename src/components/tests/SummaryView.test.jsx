import { render, screen } from '@testing-library/react';
import { SummaryView } from '../SummaryView';

describe('SummaryView component', () => {
  test("SummaryView is shown", ()=>{
    render(<SummaryView />);
    const application = screen.getByText("App");
    expect(application).toBeInTheDocument;
  })
});
