import styled from "styled-components";
import Button from "./components/Button";
const App = () => {
  return (
    <>
      <Container>
        <h1>Buttons</h1>
        <p>import Button from "./components/Button"</p>
        <Grid>
          <div>
            <p>{'<Button value="default" />'}</p>
            <Button value="default" />
          </div>
          <div>
            <p>{'<Button value="default" variant="outline"/>'}</p>
            <Button value="default" variant="outline" />
          </div>
          <div>
            <p>{'<Button value="default" variant="text"/>'}</p>
            <Button value="default" variant="text" />
          </div>
          <div>
            <p>{'<Button value="default" color="primary"/>'}</p>
            <Button value="default" color="primary" />
          </div>
          <div>
            <p>
              {'<Button value="default" variant="outline" color="primary"/>'}
            </p>
            <Button value="default" variant="outline" color="primary" />
          </div>
          <div>
            <p>{'<Button value="default" variant="text" color="primary"/>'}</p>
            <Button value="default" variant="text" color="primary" />
          </div>
          <div>
            <p>{'<Button value="default" color="secondary"/>'}</p>
            <Button value="default" color="secondary" />
          </div>
          <div>
            <p>
              {`<Button
                  value="default"
                  variant="outline"
                  color="secondary"
                 />`}
            </p>
            <Button value="default" variant="outline" color="secondary" />
          </div>
          <div>
            <p>
              {'<Button value="default" variant="text" color="secondary"/>'}
            </p>
            <Button value="default" variant="text" color="secondary" />
          </div>
          <div>
            <p>{'<Button value="default" color="danger"/>'}</p>
            <Button value="default" color="danger" />
          </div>
          <div>
            <p>
              {`<Button
                  value="default"
                  variant="outline"
                  color="danger"
                 />`}
            </p>
            <Button value="default" variant="outline" color="danger" />
          </div>
          <div>
            <p>{'<Button value="default" variant="text" color="danger"/>'}</p>
            <Button value="default" variant="text" color="danger" />
          </div>
          <div>
            <p>{'<Button value="default" disabled/>'}</p>
            <Button value="default" disabled />
          </div>
          <div>
            <p>{'<Button value="default" variant="outline" disabled/>'}</p>
            <Button value="default" variant="outline" disabled />
          </div>
          <div>
            <p>{'<Button value="default" variant="text" disabled/>'}</p>
            <Button value="default" variant="text" disabled />
          </div>
          <div>
            <p>{'<Button value="default" color="primary" size="default"/>'}</p>
            <Button value="default" color="primary" size="default" />
          </div>
          <div>
            <p>{'<Button value="default" color="primary" size="sm"/>'}</p>
            <Button value="default" color="primary" size="sm" />
          </div>
          <div>
            <p>{'<Button value="default" color="primary" size="md"/>'}</p>
            <Button value="default" color="primary" size="md" />
          </div>
          <div>
            <p>{'<Button value="default" color="primary" size="lg"/>'}</p>
            <Button value="default" color="primary" size="lg" />
          </div>
          <div>
            <p>
              {
                '<Button value="default" color="primary" size="md" disableShadow/>'
              }
            </p>
            <Button value="default" color="primary" size="md" disableShadow />
          </div>
        </Grid>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  h1 {
    color: rgba(0, 0, 0, 0.6);
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
    color: rgba(0, 0, 0, 0.6);
  }
`;
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 1rem;
  margin-top: 1rem;
  div {
  }
  div p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.7rem;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default App;
