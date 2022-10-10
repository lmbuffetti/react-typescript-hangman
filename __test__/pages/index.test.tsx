import * as React from 'react'
import renderer from 'react-test-renderer';
import IndexPages from "../../pages";

test('Components', () => {
    const app = renderer
      .create(<IndexPages />)
      .toJSON();
    expect(app).toMatchSnapshot();
});
