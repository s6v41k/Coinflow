<script setup>
import { computed, ref } from 'vue';

const sampleSets = {
  starter: {
    label: 'Starter Month',
    transactions: [
      { id: 1, date: '2026-03-01', merchant: 'Albert Heijn', amount: 12.4 },
      { id: 2, date: '2026-03-02', merchant: 'GVB Transport', amount: 2.9 },
      { id: 3, date: '2026-03-03', merchant: 'Kruidvat', amount: 7.2 },
      { id: 4, date: '2026-03-04', merchant: 'Hema', amount: 4.6 },
      { id: 5, date: '2026-03-05', merchant: 'Lidl', amount: 18.35 },
      { id: 6, date: '2026-03-06', merchant: 'NS Ticket', amount: 9.8 },
      { id: 7, date: '2026-03-07', merchant: 'Jumbo', amount: 23.45 },
      { id: 8, date: '2026-03-08', merchant: 'Etos', amount: 6.75 },
      { id: 9, date: '2026-03-09', merchant: 'Coffee Company', amount: 3.5 },
      { id: 10, date: '2026-03-10', merchant: 'Action', amount: 11.2 },
      { id: 11, date: '2026-03-11', merchant: 'Aldi', amount: 15.9 },
      { id: 12, date: '2026-03-12', merchant: 'GVB Transport', amount: 3.4 },
      { id: 13, date: '2026-03-13', merchant: 'Dirk', amount: 19.15 },
      { id: 14, date: '2026-03-14', merchant: 'Kiosk', amount: 2.6 },
      { id: 15, date: '2026-03-15', merchant: 'Albert Heijn', amount: 14.85 },
      { id: 16, date: '2026-03-16', merchant: 'Holland and Barrett', amount: 8.7 },
      { id: 17, date: '2026-03-17', merchant: 'Jumbo', amount: 26.3 },
      { id: 18, date: '2026-03-18', merchant: 'NS Ticket', amount: 7.95 },
      { id: 19, date: '2026-03-19', merchant: 'Hema', amount: 5.45 },
      { id: 20, date: '2026-03-20', merchant: 'Lidl', amount: 17.1 },
      { id: 21, date: '2026-03-21', merchant: 'Etos', amount: 9.55 },
      { id: 22, date: '2026-03-22', merchant: 'Coffee Company', amount: 4.25 },
      { id: 23, date: '2026-03-23', merchant: 'Aldi', amount: 13.6 },
      { id: 24, date: '2026-03-24', merchant: 'Albert Heijn', amount: 21.75 },
      { id: 25, date: '2026-03-25', merchant: 'GVB Transport', amount: 3.1 }
    ]
  },
  family: {
    label: 'Family Budget',
    transactions: [
      { id: 101, date: '2026-04-01', merchant: 'Jumbo', amount: 34.8 },
      { id: 102, date: '2026-04-02', merchant: 'Lidl', amount: 21.55 },
      { id: 103, date: '2026-04-03', merchant: 'Bruna', amount: 6.9 },
      { id: 104, date: '2026-04-04', merchant: 'GVB Transport', amount: 5.6 },
      { id: 105, date: '2026-04-05', merchant: 'Albert Heijn', amount: 28.45 },
      { id: 106, date: '2026-04-06', merchant: 'Hema', amount: 12.3 },
      { id: 107, date: '2026-04-07', merchant: 'Kruidvat', amount: 14.75 },
      { id: 108, date: '2026-04-08', merchant: 'Dirk', amount: 26.2 },
      { id: 109, date: '2026-04-09', merchant: 'NS Ticket', amount: 11.4 },
      { id: 110, date: '2026-04-10', merchant: 'Action', amount: 16.95 },
      { id: 111, date: '2026-04-11', merchant: 'Jumbo', amount: 31.7 },
      { id: 112, date: '2026-04-12', merchant: 'Aldi', amount: 18.65 },
      { id: 113, date: '2026-04-13', merchant: 'Etos', amount: 9.9 },
      { id: 114, date: '2026-04-14', merchant: 'Hema', amount: 7.8 },
      { id: 115, date: '2026-04-15', merchant: 'Albert Heijn', amount: 24.15 },
      { id: 116, date: '2026-04-16', merchant: 'Coffee Company', amount: 5.4 },
      { id: 117, date: '2026-04-17', merchant: 'Lidl', amount: 22.95 },
      { id: 118, date: '2026-04-18', merchant: 'GVB Transport', amount: 4.2 },
      { id: 119, date: '2026-04-19', merchant: 'Dirk', amount: 27.6 },
      { id: 120, date: '2026-04-20', merchant: 'Kruidvat', amount: 10.5 },
      { id: 121, date: '2026-04-21', merchant: 'Jumbo', amount: 29.35 },
      { id: 122, date: '2026-04-22', merchant: 'Action', amount: 8.25 },
      { id: 123, date: '2026-04-23', merchant: 'Albert Heijn', amount: 19.7 },
      { id: 124, date: '2026-04-24', merchant: 'NS Ticket', amount: 12.85 },
      { id: 125, date: '2026-04-25', merchant: 'Aldi', amount: 20.4 }
    ]
  },
  urgent: {
    label: 'Unexpected Expense Month',
    transactions: [
      { id: 201, date: '2026-05-01', merchant: 'Albert Heijn', amount: 17.35 },
      { id: 202, date: '2026-05-02', merchant: 'Pharmacy', amount: 13.6 },
      { id: 203, date: '2026-05-03', merchant: 'GVB Transport', amount: 3.2 },
      { id: 204, date: '2026-05-04', merchant: 'Jumbo', amount: 22.75 },
      { id: 205, date: '2026-05-05', merchant: 'Phone Repair', amount: 49.5 },
      { id: 206, date: '2026-05-06', merchant: 'Lidl', amount: 16.9 },
      { id: 207, date: '2026-05-07', merchant: 'NS Ticket', amount: 8.6 },
      { id: 208, date: '2026-05-08', merchant: 'Kruidvat', amount: 11.25 },
      { id: 209, date: '2026-05-09', merchant: 'Hema', amount: 6.8 },
      { id: 210, date: '2026-05-10', merchant: 'Dirk', amount: 24.4 },
      { id: 211, date: '2026-05-11', merchant: 'Coffee Company', amount: 4.7 },
      { id: 212, date: '2026-05-12', merchant: 'Etos', amount: 9.15 },
      { id: 213, date: '2026-05-13', merchant: 'Albert Heijn', amount: 18.95 },
      { id: 214, date: '2026-05-14', merchant: 'GVB Transport', amount: 3.95 },
      { id: 215, date: '2026-05-15', merchant: 'Jumbo', amount: 21.6 },
      { id: 216, date: '2026-05-16', merchant: 'Utility Top-up', amount: 27.3 },
      { id: 217, date: '2026-05-17', merchant: 'Lidl', amount: 14.55 },
      { id: 218, date: '2026-05-18', merchant: 'NS Ticket', amount: 7.4 },
      { id: 219, date: '2026-05-19', merchant: 'Pharmacy', amount: 16.85 },
      { id: 220, date: '2026-05-20', merchant: 'Action', amount: 9.7 },
      { id: 221, date: '2026-05-21', merchant: 'Dirk', amount: 19.2 },
      { id: 222, date: '2026-05-22', merchant: 'Coffee Company', amount: 3.8 },
      { id: 223, date: '2026-05-23', merchant: 'Albert Heijn', amount: 23.5 },
      { id: 224, date: '2026-05-24', merchant: 'Hema', amount: 5.9 },
      { id: 225, date: '2026-05-25', merchant: 'Kruidvat', amount: 12.65 }
    ]
  }
};

const transactions = ref([]);
const roundUpEnabled = ref(true);
const savingGoal = ref(25);
const withdrawnTotal = ref(0);
const uploadStatus = ref('Upload a CSV or load the sample transactions for the demo.');
const withdrawMessage = ref('');
const selectedSample = ref('starter');
const sortMode = ref('date');
const nudgeMessages = [
  'Small coins still build a safety cushion.',
  'You are one good habit away from your rainy day goal.',
  'Unexpected expenses feel lighter with a buffer in place.'
];

const parsedTransactions = computed(() =>
  transactions.value.map((transaction, index) => {
    const amount = Number(transaction.amount);
    const nextEuro = Math.ceil(amount);
    const roundUp = Number((nextEuro - amount).toFixed(2));

    return {
      id: transaction.id ?? index + 1,
      date: transaction.date,
      merchant: transaction.merchant,
      amount,
      roundUp
    };
  })
);

const sortedTransactions = computed(() => {
  const items = [...parsedTransactions.value];

  if (sortMode.value === 'amount-desc') {
    return items.sort((a, b) => b.amount - a.amount);
  }

  if (sortMode.value === 'roundup-desc') {
    return items.sort((a, b) => b.roundUp - a.roundUp);
  }

  return items.sort((a, b) => new Date(a.date) - new Date(b.date));
});

const activeSavings = computed(() =>
  roundUpEnabled.value
    ? Number(parsedTransactions.value.reduce((sum, transaction) => sum + transaction.roundUp, 0).toFixed(2))
    : 0
);

const totalWithSavings = computed(() => Number((activeSavings.value + withdrawnTotal.value).toFixed(2)));
const progressPercent = computed(() => {
  if (!savingGoal.value) return 0;
  return Math.min((activeSavings.value / savingGoal.value) * 100, 100);
});

const averageSavedPerWeek = computed(() => {
  if (!parsedTransactions.value.length || !roundUpEnabled.value) return 0;

  const sorted = [...parsedTransactions.value].sort((a, b) => new Date(a.date) - new Date(b.date));
  const firstDate = new Date(sorted[0].date);
  const lastDate = new Date(sorted[sorted.length - 1].date);
  const daySpan = Math.max(1, Math.ceil((lastDate - firstDate) / (1000 * 60 * 60 * 24)) + 1);
  const weeks = Math.max(1, daySpan / 7);

  return Number((activeSavings.value / weeks).toFixed(2));
});

const monthlyActiveSavers = computed(() => (parsedTransactions.value.length && roundUpEnabled.value ? 1 : 0));
const goalCompletionRate = computed(() => (activeSavings.value >= Number(savingGoal.value || 0) && savingGoal.value > 0 ? 100 : Number(progressPercent.value.toFixed(0))));
const transactionCount = computed(() => parsedTransactions.value.length);
const largestRoundUp = computed(() => {
  if (!parsedTransactions.value.length || !roundUpEnabled.value) return 0;
  return Math.max(...parsedTransactions.value.map((transaction) => transaction.roundUp));
});
const recommendedWeeklyTarget = computed(() => {
  if (!activeSavings.value) return 3;
  return Number(Math.max(3, (activeSavings.value / Math.max(1, transactionCount.value)) * 7).toFixed(2));
});
const savingsProjection = computed(() => Number((averageSavedPerWeek.value * 4).toFixed(2)));
const roundUpSavedToday = computed(() => {
  if (!parsedTransactions.value.length || !roundUpEnabled.value) return 0;
  const latestDate = [...parsedTransactions.value]
    .map((transaction) => transaction.date)
    .sort()
    .at(-1);

  return Number(
    parsedTransactions.value
      .filter((transaction) => transaction.date === latestDate)
      .reduce((sum, transaction) => sum + transaction.roundUp, 0)
      .toFixed(2)
  );
});
const currentNudge = computed(() => {
  if (!parsedTransactions.value.length) return nudgeMessages[0];
  if (progressPercent.value >= 75) return 'You are close. One more week of spare change could finish the goal.';
  return nudgeMessages[parsedTransactions.value.length % nudgeMessages.length];
});

function getRoundUpLevel(roundUp) {
  if (roundUp >= 0.7) return 'high';
  if (roundUp >= 0.35) return 'medium';
  return 'low';
}

function parseCsvText(text) {
  const rows = text
    .split(/\r?\n/)
    .map((row) => row.trim())
    .filter(Boolean);

  if (rows.length < 2) {
    throw new Error('The CSV needs a header row and at least one transaction.');
  }

  const headers = rows[0].split(',').map((header) => header.trim().toLowerCase());
  const expectedHeaders = ['date', 'merchant', 'amount'];

  if (!expectedHeaders.every((header) => headers.includes(header))) {
    throw new Error('Use CSV columns: date, merchant, amount');
  }

  return rows.slice(1).map((row, index) => {
    const columns = row.split(',').map((value) => value.trim());
    const item = Object.fromEntries(headers.map((header, headerIndex) => [header, columns[headerIndex] ?? '']));
    const amount = Number(item.amount);

    if (!item.date || !item.merchant || Number.isNaN(amount)) {
      throw new Error(`Row ${index + 2} is invalid. Check date, merchant, and amount.`);
    }

    return {
      id: Date.now() + index,
      date: item.date,
      merchant: item.merchant,
      amount
    };
  });
}

async function handleFileUpload(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  try {
    const text = await file.text();
    transactions.value = parseCsvText(text);
    withdrawnTotal.value = 0;
    withdrawMessage.value = '';
    uploadStatus.value = `Loaded ${transactions.value.length} transactions from ${file.name}.`;
  } catch (error) {
    uploadStatus.value = error.message;
  }
}

function loadSampleTransactions(sampleKey = selectedSample.value) {
  selectedSample.value = sampleKey;
  transactions.value = sampleSets[sampleKey].transactions.map((transaction) => ({ ...transaction }));
  withdrawnTotal.value = 0;
  withdrawMessage.value = '';
  uploadStatus.value = `${sampleSets[sampleKey].label} loaded with ${transactions.value.length} transactions.`;
}

function resetDemo() {
  transactions.value = [];
  roundUpEnabled.value = true;
  savingGoal.value = 25;
  withdrawnTotal.value = 0;
  withdrawMessage.value = '';
  uploadStatus.value = 'Demo reset. Upload a CSV or load the sample transactions.';
}

function withdrawSavings() {
  if (!activeSavings.value) {
    withdrawMessage.value = 'There is no money in the rainy day pot yet.';
    return;
  }

  withdrawnTotal.value = Number((withdrawnTotal.value + activeSavings.value).toFixed(2));
  withdrawMessage.value = `Mock withdrawal complete. EUR ${activeSavings.value.toFixed(2)} would be sent back to the user.`;
  transactions.value = [];
}
</script>

<template>
  <div class="app-shell">
    <section class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">CoinFlow</p>
        <h1>Round up everyday purchases into a rainy day pot.</h1>
        <p class="hero-text">
          Built for low-income users who need a simple buffer for unexpected expenses.
          Upload transactions, turn round-ups on, and show savings progress in seconds.
        </p>
        <div class="hero-actions">
          <button class="primary-button" @click="loadSampleTransactions()">Load Selected Sample</button>
          <button class="secondary-button" @click="resetDemo">Reset Demo</button>
          <a class="ghost-button" :href="`/${selectedSample}.csv`" download>Download Selected CSV</a>
        </div>
      </div>

      <div class="hero-panel">
        <p class="panel-label">Why CoinFlow</p>
        <p class="hero-text">
          CoinFlow turns spare change into emergency savings with almost no effort.
          It is designed to feel simple, encouraging, and realistic for users who need a small safety buffer fast.
        </p>
      </div>
    </section>

    <section class="content-grid">
      <div class="main-column">
        <article class="card">
          <div class="section-heading">
            <div>
              <p class="section-kicker">MVP Flow</p>
              <h2>Manual transaction uploader</h2>
            </div>
            <span class="status-pill">{{ uploadStatus }}</span>
          </div>

          <div class="uploader-grid">
            <label class="upload-box">
              <span>Select CSV file</span>
              <small>Upload any file in CSV format.</small>
              <input type="file" accept=".csv" @change="handleFileUpload" />
            </label>

            <div class="csv-preview">
              <p class="preview-label">Sample files</p>
              <div class="sample-buttons">
                <button
                  v-for="(sample, key) in sampleSets"
                  :key="key"
                  class="sample-button"
                  :class="{ active: selectedSample === key }"
                  @click="loadSampleTransactions(key)"
                >
                  {{ sample.label }}
                </button>
              </div>
            </div>
          </div>
        </article>

        <article class="card">
          <div class="section-heading">
            <div>
              <p class="section-kicker">Savings Engine</p>
              <h2>Round-up controls</h2>
            </div>
          </div>

          <div class="controls-row">
            <label class="toggle-card">
              <span>Round-up enabled</span>
              <input v-model="roundUpEnabled" type="checkbox" />
            </label>

            <label class="goal-card">
              <span>Rainy day goal</span>
              <div class="goal-input">
                <span>EUR</span>
                <input v-model.number="savingGoal" type="number" min="1" step="1" />
              </div>
            </label>
          </div>

          <div class="progress-card">
            <div class="progress-copy">
              <div>
                <p class="progress-label">Current rainy day pot</p>
                <h3>EUR {{ activeSavings.toFixed(2) }}</h3>
              </div>
              <div class="goal-summary">
                <span>{{ progressPercent.toFixed(0) }}%</span>
                <p>of EUR {{ Number(savingGoal).toFixed(0) }} goal</p>
              </div>
            </div>

            <div class="progress-track">
              <div class="progress-fill" :style="{ width: `${progressPercent}%` }"></div>
            </div>

            <p class="nudge">{{ currentNudge }}</p>

            <button class="withdraw-button" @click="withdrawSavings">Withdraw Mock Balance</button>
            <p v-if="withdrawMessage" class="withdraw-message">{{ withdrawMessage }}</p>
          </div>
        </article>

        <article class="card">
          <div class="section-heading">
            <div>
              <p class="section-kicker">Transactions</p>
              <h2>Uploaded purchases</h2>
            </div>
            <div class="table-tools">
              <span class="table-count">{{ parsedTransactions.length }} items</span>
              <select v-model="sortMode" class="sort-select">
                <option value="date">Sort by date</option>
                <option value="amount-desc">Highest amount</option>
                <option value="roundup-desc">Highest round-up</option>
              </select>
            </div>
          </div>

          <div v-if="sortedTransactions.length" class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Merchant</th>
                  <th>Amount</th>
                  <th>Round-up</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="transaction in sortedTransactions" :key="transaction.id">
                  <td>{{ transaction.date }}</td>
                  <td>{{ transaction.merchant }}</td>
                  <td>EUR {{ transaction.amount.toFixed(2) }}</td>
                  <td>
                    <div class="roundup-cell">
                      <span>EUR {{ roundUpEnabled ? transaction.roundUp.toFixed(2) : '0.00' }}</span>
                      <span
                        v-if="roundUpEnabled"
                        class="roundup-badge"
                        :class="getRoundUpLevel(transaction.roundUp)"
                      >
                        {{ getRoundUpLevel(transaction.roundUp) }}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-else class="empty-state">No transactions uploaded yet. Use the sample file to start the demo.</p>
        </article>
      </div>

      <aside class="side-column">
        <article class="card metrics-card">
          <p class="section-kicker">Today</p>
          <h2>Round-up saved today</h2>

          <div class="today-highlight">
            <strong>EUR {{ roundUpSavedToday.toFixed(2) }}</strong>
            <p>Spare change from the most recent transaction day currently loaded in the app.</p>
          </div>
        </article>

        <article class="card metrics-card">
          <p class="section-kicker">Quick Stats</p>
          <h2>Small features for the demo</h2>

          <div class="metric-list">
            <div class="metric-item">
              <span>Transactions uploaded</span>
              <strong>{{ transactionCount }}</strong>
            </div>
            <div class="metric-item">
              <span>Largest round-up</span>
              <strong>EUR {{ largestRoundUp.toFixed(2) }}</strong>
            </div>
            <div class="metric-item">
              <span>Projected 4-week savings</span>
              <strong>EUR {{ savingsProjection.toFixed(2) }}</strong>
            </div>
            <div class="metric-item">
              <span>Suggested weekly target</span>
              <strong>EUR {{ recommendedWeeklyTarget.toFixed(2) }}</strong>
            </div>
          </div>
        </article>

        <article class="card metrics-card">
          <p class="section-kicker">Metrics</p>
          <h2>What the demo should show</h2>

          <div class="metric-list">
            <div class="metric-item">
              <span>Monthly active savers</span>
              <strong>{{ monthlyActiveSavers }}</strong>
            </div>
            <div class="metric-item">
              <span>Average saved per week</span>
              <strong>EUR {{ averageSavedPerWeek.toFixed(2) }}</strong>
            </div>
            <div class="metric-item">
              <span>Goal completion rate</span>
              <strong>{{ goalCompletionRate }}%</strong>
            </div>
            <div class="metric-item">
              <span>Total moved into savings</span>
              <strong>EUR {{ totalWithSavings.toFixed(2) }}</strong>
            </div>
          </div>
        </article>

        <article class="card">
          <p class="section-kicker">Why it matters</p>
          <h2>Problem and solution</h2>
          <ul class="insight-list">
            <li>Problem: people struggle to build small savings and cover unexpected expenses.</li>
            <li>Solution: every card purchase rounds up to the next euro and moves the spare change into savings.</li>
            <li>Scope: simplified MVP inspired by consumer round-up apps, but focused on accessibility and emergency savings.</li>
          </ul>
        </article>
      </aside>
    </section>
  </div>
</template>
