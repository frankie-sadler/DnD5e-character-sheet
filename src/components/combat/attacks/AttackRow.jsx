const AttackRow = (props) => {
  return (
    <>
      <tr>
        <td>
          <input name="atkname" type="text" />
        </td>
        <td>
          <input name="atkbonus" type="text" />
        </td>
        <td>
          <input name="atkdamage" type="text" />
        </td>
      </tr>
    </>
  );
};

export default AttackRow;
