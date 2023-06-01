import React, { useState } from 'react';
import AGREEMENT_LIST from './Agreement';
import INPUT_LIST from './inputList';
import CHECK_LIST from './checkList';
import './Signup.scss';

function Signup() {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    name: '',
    number: '',
    address: '',
    detail: '',
    date: '',
    checked: '',
  });

  const valueConditions = {
    email: inputValues.email.includes('@'),
    password: inputValues.password.length >= 5,
    name: inputValues.name.length >= 1,
    number: inputValues.number.length >= 11,
    address: inputValues.address.length >= 1,
    detail: inputValues.detail.length >= 1,
    date: inputValues.date.length >= 1,
  };

  const handleInput = event => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setInputValues({ ...inputValues, [name]: value });
  };

  const isActive =
    inputValues.email.includes('@') &&
    inputValues.password.length >= 5 &&
    inputValues.number.length >= 11 &&
    inputValues.name.length >= 1 &&
    inputValues.address.length >= 1 &&
    inputValues.detail.length >= 1;

  return (
    <div className="signup">
      <div className="wediya">WEDIYA</div>
      <div className="signupTitle">
        <h2>회원가입</h2>
      </div>
      <div className="inputForm">
        {INPUT_LIST.map(inputList => (
          <>
            <div className="textWrap">
              <p className="inputTitle">{inputList.title}</p>
              {!valueConditions[inputList.name] && (
                <span className="vaild">{inputList.vaild}</span>
              )}
            </div>

            <input
              key={inputList.id}
              name={inputList.name}
              type={inputList.type}
              placeholder={inputList.placeholder}
              onChange={handleInput}
            />
          </>
        ))}

        <div className="textWrap">
          <p className="inputTitle">추가정보</p>
        </div>
        <div className="route">
          <table>
            {CHECK_LIST.map(checkList => (
              <>
                <thead key={checkList.id} />
                <tbody>
                  <tr>
                    <td className="tabletitle">{checkList.th}</td>
                    <div className="tdWrap">
                      <td>
                        <label className="check">
                          <input type="checkbox" />
                          <span className="icon" />
                        </label>
                        <span>{checkList.td1}</span>
                      </td>
                      <td>
                        <label className="check">
                          <input type="checkbox" />
                          <span className="icon" />
                        </label>
                        <span>{checkList.td2}</span>
                      </td>
                      <td>
                        <label className="check">
                          <input type="checkbox" />
                          <span className="icon" />
                        </label>
                        <span>{checkList.td3}</span>
                      </td>
                      <td>
                        <label className="check">
                          <input type="checkbox" />
                          <span className="icon" />
                        </label>
                        <span>{checkList.td4}</span>
                      </td>
                      <td>
                        <label className="check">
                          <input type="checkbox" />
                          <span className="icon" />
                        </label>
                        <span>{checkList.td5}</span>
                      </td>
                    </div>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>

        <div className="agreement">
          {AGREEMENT_LIST.map(list => (
            <div key={list.id}>
              <div className="itemFlex">
                <h2 className="agreementTitle">
                  {list.title} <span>{list.span}</span>
                </h2>
                <p>
                  <label className="check">
                    <input
                      name="checked"
                      onChange={handleInput}
                      type="checkbox"
                      defaultValue="Y"
                    />
                    <span className="icon" />
                  </label>
                </p>
              </div>
              <div className="agree">
                <div className="agreeScroll">{list.content}</div>
              </div>
            </div>
          ))}
        </div>

        <button className={isActive ? 'able' : 'disabled'}>회원가입하기</button>
      </div>
    </div>
  );
}

export default Signup;
