const models = require('../../../models');
const Selection = models.Selection;
const User = models.User;

const ROW = {
  full_name: null,
  company_name: null,
  email_address: null,
  job_title: null,
  merketing_confirmation: null,
  user_identifier: null,
  timestamp: null,
  selection_1_type: null,
  selection_1_value: null,
  selection_2_type: null,
  selection_2_value: null,
  selection_3_type: null,
  selection_3_value: null,
  selection_4_type: null,
  selection_4_value: null,
  selection_5_type: null,
  selection_5_value: null,
  product: null,
  suggested_alternatives: null
};

const fetchData = (selection) => {
  const details = selection.toJSON();
  const user = details.user;

  let row = {
    full_name: user.full_name,
    company_name: user.company_name,
    email_address: user.email_address,
    job_title: user.job_title,
    marketing_confirmation: user.marketing_confirmation,
    user_identifier: user.id,
    timestamp: user.createdAt
  };

  const steps = details.steps;

  steps.forEach((step, index) => {
    const selectionId = `selection_${ index + 1 }`;
    row[`${ selectionId }_type`] = step.type;
    row[`${ selectionId }_value`] = step.value;
  });

  return selection.getProducts()
                  .then(({ product, alternatives }) => {
                    row.product = product ? product.title : null;
                    row.suggested_alternatives = alternatives.map(product => {
                      return product ? product.title : null;
                    }).join(';');

                    return row;
                  });
}

const selectionToRow = (selection) => {
  return fetchData(selection)
    .then(row => {
      return Object.assign({}, ROW, row);
    });
}

module.exports = (req, res) => {
  Selection.findAll({
    include: [
      { model: User, as: 'user' }
    ]
  })
      .then(selections => {
        Promise.all(selections.map(selectionToRow))
               .then(rows => {
                 res.csv(rows, true);
               });
      });
}
